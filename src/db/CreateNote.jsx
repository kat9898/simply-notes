export function AddNote(data) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
  
    async function addNote() {
      try {
  
        // Add the new friend!
        const id = await db.friends.add({
          name,
          age
        });

        setName("");
        setAge(defaultAge);
      } catch (error) {
        setStatus(`Failed to add ${name}: ${error}`);
      }
    }
  
    return <>
      <p>
        {status}
      </p>
      Name:
      <input
        type="text"
        value={name}
        onChange={ev => setName(ev.target.value)}
      />
      Age:
      <input
        type="number"
        value={age}
        onChange={ev => setAge(Number(ev.target.value))}
      />
      
      <button onClick={addFriend}>
        Add
      </button>
    </>
  }