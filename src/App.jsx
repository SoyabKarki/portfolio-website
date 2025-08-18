import Terminal from './components/Terminal';

function App() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#DFDBE5',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M5 15h2v2H5v-2zm8-8h2v2h-2V7z'%3E%3C/path%3E%3C/svg%3E")`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <Terminal />
        </div>
    )
}

export default App;