export default function Input({ value }) {
    const inputStyle = {
        width: '250px',
        padding: '10px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        fontSize: '20px',
        outline: 'none',
        borderColor: '#ccc',
        boxShadow: 'none'
    }
    return (
        <input style={inputStyle} className="input" value={value} type="text" readOnly />
    )
}