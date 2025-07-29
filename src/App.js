import React, { useState, useEffect } from 'react';
import { useAccount, useWalletClient } from 'wagmi'
import { ethers } from 'ethers';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'viem/chains';
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'Todo List DApp',
  projectId: 'd850230964b13ffebe2790e0aba16d39', // ✅ Replace with real WalletConnect project ID
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: false, // Set to false for client-side only apps
});

const queryClient = new QueryClient();

// Simple Todo Contract ABI (you'll need to replace this with your actual contract ABI)
const TODO_CONTRACT_ABI = [
  "function addTask(string memory _task) public",
  "function completeTask(uint256 _index) public",
  "function getTasks() public view returns (tuple(string task, bool completed)[] memory)",
  "function getTasksCount() public view returns (uint256)"
];

// Replace with your deployed contract address
const TODO_CONTRACT_ADDRESS = "0x..."; // You need to add your contract address here

function TodoApp() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [contract, setContract] = useState(null);

  // Initialize contract when wallet is connected
  useEffect(() => {
    const initContract = async () => {
      if (walletClient && TODO_CONTRACT_ADDRESS !== "0x...") {
        try {
          const provider = new ethers.BrowserProvider(walletClient);
          const signer = await provider.getSigner();
          const todoContract = new ethers.Contract(TODO_CONTRACT_ADDRESS, TODO_CONTRACT_ABI, signer);
          setContract(todoContract);
          console.log("Contract initialized:", todoContract);
        } catch (error) {
          console.error("Error initializing contract:", error);
        }
      }
    };

    initContract();
  }, [walletClient]);

  // Load existing tasks from contract
  useEffect(() => {
    const loadTasks = async () => {
      if (contract) {
        try {
          const contractTasks = await contract.getTasks();
          setTasks(contractTasks.map(task => [task.task, task.completed]));
        } catch (error) {
          console.error("Error loading tasks:", error);
        }
      }
    };

    loadTasks();
  }, [contract]);

  const addNewTask = async() => {
    try {
      if (contract && TODO_CONTRACT_ADDRESS !== "0x...") {
        // Use smart contract
        const newTask = await contract.addTask(inputTask)
        console.log(newTask)
        await newTask.wait()
        setTasks(prev => [...prev, [inputTask, false]])
        setInputTask("")
        document.getElementById('input-task').value = ""
      } else {
        // Fallback: Use local state for testing
        console.log("Adding task locally (no contract):", inputTask);
        setTasks(prev => [...prev, [inputTask, false]]);
        setInputTask("");
        document.getElementById('input-task').value = "";
      }
    } catch(err) {
      console.log(err)
    }
  }

  const completeTask = async(task) => {
    try {
      const taskIndex = tasks.findIndex(a => a[0] === task)
      console.log("index ", taskIndex)
      
      if (contract && TODO_CONTRACT_ADDRESS !== "0x...") {
        // Use smart contract
        const completeTask = await contract.completeTask(taskIndex)
        console.log(completeTask)
        await completeTask.wait()
      }
      
      // Update local state
      const newTasks = tasks.filter(a => a[0] !== task)
      console.log(newTasks)
      setTasks(newTasks)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <p className="text-xl font-bold">Todo-List</p>
        {address && <ConnectButton />}
      </div>
      <div
        style={{ minHeight: "95vh" }}
        className="flex flex-col items-center justify-center gap-4 w-full"
      >
        <h1 className="text-4xl font-extrabold">Todo List</h1>
        {!address && <ConnectButton />}
        
        {/* Add Task */}
        <div className="flex flex-row items-center justify-center gap-4">
          <input 
            id="input-task" 
            onChange={(e) => setInputTask(e.target.value)} 
            className="px-4 py-2 rounded-xl text-black" 
            placeholder="Add a task..." 
            value={inputTask}
          />
          <button 
            onClick={addNewTask} 
            className="px-4 py-2 rounded-xl border border-green-400 bg-white text-black transform hover:scale-105"
            disabled={!inputTask}
          >
            Add Task
          </button>
        </div>
        
        {/* All Tasks */}
        <div className="flex items-center justify-center flex-col">
          {tasks.length > 0 &&
            tasks.map((taskItem, i) => {
              return (
                <div key={i}>
                  {/* Check if task is not completed */}
                  {
                    !taskItem[1] && (
                      <div className="flex items-center justify-between gap-3 py-2">
                        <p>{taskItem[0]}</p>
                        <button 
                          onClick={() => completeTask(taskItem[0])} 
                          className="px-2 py-1 rounded-xl bg-white text-black border border-blue-400 transform hover:scale-105"
                        >
                          Complete
                        </button>
                      </div>
                    )
                  }
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <TodoApp />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
