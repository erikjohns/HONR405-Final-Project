const LoadingSpinner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="spinner"></div>
            <style jsx>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(0, 0, 0, 0.1);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
};

export default LoadingSpinner;