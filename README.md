# 🚀 Web3 Todo List DApp

Live Demo : https://web3-todo-list-d-app.vercel.app/


A decentralized Todo List application built with React, Wagmi, RainbowKit, and Tailwind CSS. This DApp allows users to manage their tasks on the blockchain with Web3 wallet integration.

![Todo List DApp](https://img.shields.io/badge/React-19.1.1-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC)
![Web3](https://img.shields.io/badge/Web3-Enabled-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🔗 **Multi-Chain Support**: Ethereum, Polygon, Optimism, Arbitrum, Base, and Sepolia
- 💼 **Wallet Integration**: Connect with multiple wallets via RainbowKit
- 📝 **Task Management**: Add and complete tasks
- 🌐 **Blockchain Storage**: Tasks stored on-chain for permanence
- 🎨 **Modern UI**: Beautiful dark theme with Tailwind CSS
- 🔄 **Fallback Mode**: Works offline with local state for testing

## 🛠 Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 3.4.17
- **Web3**: Wagmi v2.16.0, RainbowKit v2.2.8, Ethers 6.15.0
- **State Management**: TanStack React Query
- **Build Tool**: Create React App

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/web3-todo-list.git
   cd web3-todo-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure WalletConnect**
   - Update `projectId` in `App.js` with your WalletConnect Project ID
   - Get one at [WalletConnect Cloud](https://cloud.walletconnect.com/)

4. **Start development server**
   ```bash
   npm start
   ```

## 🚀 Usage

### Local Development (No Contract)
1. Run `npm start`
2. Connect your wallet
3. Add and manage tasks locally

### With Smart Contract
1. Deploy the Todo smart contract to your preferred network
2. Update `TODO_CONTRACT_ADDRESS` in `App.js`
3. Ensure your contract matches the ABI in the code
4. Connect wallet and interact with blockchain

## 📋 Smart Contract Interface

The DApp expects a smart contract with the following functions:

```solidity
// Add a new task
function addTask(string memory _task) public

// Mark a task as completed
function completeTask(uint256 _index) public

// Get all tasks
function getTasks() public view returns (tuple(string task, bool completed)[] memory)

// Get total number of tasks
function getTasksCount() public view returns (uint256)
```

## 🌐 Supported Networks

- **Ethereum Mainnet** - Production use
- **Polygon** - Low-cost transactions
- **Optimism** - Layer 2 scaling
- **Arbitrum** - Fast and cheap
- **Base** - Coinbase's Layer 2
- **Sepolia** - Ethereum testnet for development

## 📱 Key Components

### App.js
- Main application component with Web3 providers
- Contract initialization and task management
- Wallet connection and network switching

### Features
- **Wallet Connection**: RainbowKit integration for multiple wallets
- **Task Management**: Add, complete, and view tasks
- **Multi-chain**: Support for 6 different networks
- **Responsive Design**: Mobile-friendly interface

## 🔑 Configuration

Update these values in `App.js`:

```javascript
// Replace with your WalletConnect Project ID
projectId: 'your_project_id_here'

// Replace with your deployed contract address
const TODO_CONTRACT_ADDRESS = "0x...";
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

