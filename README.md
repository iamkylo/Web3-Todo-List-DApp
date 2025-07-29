🚀 Web3 Todo List DApp
LIVE DEMO: 🔗 Click here to try the DApp

A decentralized Todo List application built with React, Wagmi, RainbowKit, and Tailwind CSS. This DApp allows users to manage their tasks on the blockchain with Web3 wallet integration.






✨ Features
🔗 Multi-Chain Support: Ethereum, Polygon, Optimism, Arbitrum, Base, and Sepolia

💼 Wallet Integration: Connect with multiple wallets via RainbowKit

📝 Task Management: Add and complete tasks

🌐 Blockchain Storage: Tasks stored on-chain for permanence

🎨 Modern UI: Beautiful dark theme with Tailwind CSS

🔄 Fallback Mode: Works offline with local state for testing

🛠 Tech Stack
Frontend: React 19.1.1

Styling: Tailwind CSS 3.4.17

Web3: Wagmi v2.16.0, RainbowKit v2.2.8, Ethers 6.15.0

State Management: TanStack React Query

Build Tool: Create React App

🔧 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/web3-todo-list.git
cd web3-todo-list
Install dependencies

bash
Copy
Edit
npm install
Configure WalletConnect

Update projectId in App.js with your WalletConnect Project ID

Get one at WalletConnect Cloud

Start development server

bash
Copy
Edit
npm start
🚀 Usage
Try the live version here: 🔗 Web3 Todo List DApp

Local Development (No Contract)
Run npm start

Connect your wallet

Add and manage tasks locally

With Smart Contract
Deploy the Todo smart contract to your preferred network

Update TODO_CONTRACT_ADDRESS in App.js

Ensure your contract matches the ABI in the code

Connect wallet and interact with blockchain

📋 Smart Contract Interface
solidity
Copy
Edit
// Add a new task
function addTask(string memory _task) public

// Mark a task as completed
function completeTask(uint256 _index) public

// Get all tasks
function getTasks() public view returns (tuple(string task, bool completed)[] memory)

// Get total number of tasks
function getTasksCount() public view returns (uint256)
🌐 Supported Networks
Ethereum Mainnet

Polygon

Optimism

Arbitrum

Base

Sepolia (Testnet)

📱 Key Components
App.js – Web3 provider setup, wallet connection, and contract functions

Task Management – Add, complete, and view tasks

Multi-chain support for 6 networks

Responsive Design – Mobile-friendly interface

🔑 Configuration
Update these values in App.js:

javascript
Copy
Edit
// Replace with your WalletConnect Project ID
projectId: 'your_project_id_here'

// Replace with your deployed contract address
const TODO_CONTRACT_ADDRESS = "0x...";
