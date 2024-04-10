export default function Buttons({ onClick }) {
    const btns = [
        'AC', '%', 'x', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '^', '='
    ]
    const btnsStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridGap: '1rem',
        marginTop: '1rem'

    }
    const btnStyle = {
        padding: '0.5rem 1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out'

    }

    return (
        <div style={btnsStyle}>
            {
                btns.map((btn,index)=>{
                    return <button key={index} style={btnStyle} onClick={() => onClick(btn)}>{btn}</button>
                })
            }
        </div>
    )

}