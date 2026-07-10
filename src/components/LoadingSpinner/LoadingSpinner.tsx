import "./LoadingSpinner.css";

const LoadingSpinner = ({
    size= 40,
    color="#2563eb"
}) => {
  return (
    <div className="spinner-container">
      <div className="spinner" style={{
            width: `${size}px`,
            height: `${size}px`,
            borderTopColor: color,
          }}/>
        
    </div>
  )
}

export default LoadingSpinner
