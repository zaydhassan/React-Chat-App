import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
        height="100vh"
        projectID="35cad37b-67e8-4eec-98c7-8ef2e2c13fcb"
        userName="zaydhassan"
        userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;