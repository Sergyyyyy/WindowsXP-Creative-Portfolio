
const Taskbar = () => {
    const date = new Date
    const month = date.getMonth()
    const year = date.getFullYear()
    const day = date.getDate()

    return (
        <>
            <div className="taskbar-container">
                <div className="taskbar">
                    <div className="start-container">start</div>
                    <p>Creative project by Gio</p>
                    <p className="taskbar-time">{day}/{month}/{year}</p>
                </div>
            </div>
        </>
    )
}

export default Taskbar