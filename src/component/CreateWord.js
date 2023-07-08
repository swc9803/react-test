export default function CreateWord() {
  return (
    <form >
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" />
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" />
        </div>
        <div className="input_area">
            <label>Day</label>
        </div>
        <button>저장</button>
    </form>
  )
}