# Nexth

A Next.js + Ethereum starter kit to quickly ship Web3 Apps ⚡

## Features ✅

- [Next.js](https://nextjs.org/docs)
- [viem](https://viem.sh/)
- [wagmi](https://wagmi.sh/)
- [Web3Modal from WalletConnect](https://docs.walletconnect.com/)
- [Sign-In with Ethereum](https://www.login.xyz/)
- [Hardhat](https://hardhat.org/)
- [DaisyUI](https://chakra-ui.com/)

## Developer Experience 🧰

- [TypeScript](https://www.typescriptlang.org/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

### Smart Contracts

If you want to add smart contracts to your project, check out the docs at [hardhat folder](./hardhat) or [foundry folder](./foundry).


## Unlimit Crypto Integration with GateFi SDK
Introduction
Unlimit is revolutionizing the payment landscape by offering a borderless payment solution that caters to both local and international markets. Our goal is to eradicate borders and intermediaries in business transactions, making it seamless for businesses to expand into regions like LATAM, APAC, Africa, Europe, and the UK. We boast the world's largest in-house developed payment infrastructure, offering a wide range of services including card acquiring, a multitude of payment methods, multi-currency IBAN accounts, card issuing, and a highly configurable API platform. Our Unlimit Crypto service is at the forefront of pioneering fiat on & offramp solutions for Defi, Gamefi, and NFTs.

This project focuses on the integration of the GateFi SDK in a React application, demonstrating our capabilities in managing cryptocurrency transactions and data.

Features
Global Card Acquiring: Accept debit and credit card payments in various currencies from all major card brands globally.
1000+ Payment Methods: Flexibility for customers to pay in their preferred method, irrespective of location.
Multi-Currency IBAN Accounts: Facilitate international transfers, card transfers, and local payment methods.
Card Issuing: Capability to launch both physical and virtual white-label cards in association with Visa, Mastercard, or UnionPay.
Unlimit BaaS: Tailored API platform to meet unique business needs.
Unlimit Crypto: Manage cryptocurrency transactions efficiently, supporting the next generation of fiat on & offramp solutions.
Getting Started
Prerequisites
Node.js
React
@gatefi/js-sdk package
crypto module for Node.js
Installation
Clone the repository.

Navigate to the project directory and install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Usage
Configuration
Ensure all necessary API and secret keys are securely set up in the code. Replace placeholders with actual API keys and secret keys.

SDK Initialization and Functionality
Initialize the GateFi SDK with appropriate configurations. The application includes features like fetching crypto quotes, handling orders, and webhook signature verification for security.

UI Components
Overlay Button: Toggle the GateFi overlay.
Order and Quote Forms: Submit forms to fetch quotes or create orders.
Tab Selection: Choose between different functional tabs in the UI.
Security
Store API keys and secret keys securely. Avoid exposing sensitive information in client-side code.

Additional Information
This project is designed for demonstration purposes. Adapt and extend it based on your specific integration needs.
Consult the GateFi SDK documentation for further functionalities and configurations.



NFT.Storage Integration
NFT.Storage for decentralized data management. Users can input text (prompts) into an interactive box, which are then stored on NFT.Storage. This component not only facilitates the storage of prompt inputs but also showcases their retrieval, presenting them in a convenient sidebar format mimicking OpenAI's interface.

Key Features
OpenAI Prompt Input: A dedicated input box for users to enter prompts intended for OpenAI's services.
Decentralized Data Storage: Utilizes NFT.Storage for storing prompt inputs, ensuring secure, decentralized, and permanent data preservation.
Prompt Retrieval and Display: Automatically retrieves and displays stored prompts in a sidebar format, similar to OpenAI's interface, for easy reference and reuse.
User-Friendly Interface: Offers a straightforward and intuitive UI for seamless interaction with OpenAI and NFT.Storage.


Usage
Storing Prompts in NFT.Storage
Enter the desired prompt in the input box.
Click the 'Submit' button to initiate storing the prompt on NFT.Storage.
View the 'Uploading...' indicator during the storage process.
Retrieving and Displaying Prompts
Post-upload, the component automatically fetches the stored prompts from NFT.Storage, displaying them in a sidebar for easy access and reference.

Error Management
The component logs errors during upload or retrieval processes to the console for troubleshooting and resolution.
Security Considerations
Substitute the placeholder authToken with your NFT.Storage API token.
Ensure secure handling of API tokens in a production environment, potentially using environmental variables or secure storage solutions.

Additional Notes
This component serves as a prototype for integrating OpenAI prompt interactions with decentralized storage solutions provided by NFT.Storage.
For comprehensive information and advanced functionalities, refer to the NFT.Storage and OpenAI documentation.

Worldcoin ID Verification Button
Overview
The WorldcoinButton component integrates the Worldcoin IDKit Widget into a React application, facilitating user verification via Worldcoin's identity service. The component offers a seamless user experience for identity verification, leveraging Worldcoin's secure and privacy-preserving technology.

Features
Worldcoin IDKit Integration: Utilizes the Worldcoin IDKit Widget for identity verification.
Multiple Credential Types: Supports various credential types including Orb and Phone for user verification.

Usage
Integration with Worldcoin IDKit
Replace app_id and action in the IDKitWidget component with your specific credentials obtained from the Worldcoin Developer Portal.
Implement the onSuccess callback to handle the response after successful verification.
The handleVerify function is designed to post the verification response to a specific endpoint for further processing.

User Interaction
Users can initiate the verification process by clicking the "Verify with World ID" button.
Upon successful verification, the configured callbacks handle the response and further actions.

Security and Configuration
Ensure that the Worldcoin app ID and action names are securely managed and correspond to your specific setup in the Developer Portal.
Review and adjust the telemetry settings as per your privacy and data collection policies.