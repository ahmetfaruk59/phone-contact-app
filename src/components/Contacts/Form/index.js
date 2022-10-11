import {useState,useEffect} from 'react'

const initialValueForm={fullname:"",phone_number:""};
function Form({addContact, contacts}) {

    const [form, setForm] = useState(initialValueForm);
    useEffect(()=>{
        setForm(initialValueForm)
    },[contacts])

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]: e.target.value});
    };
  
    const onSubmit=(e)=>{
        e.preventDefault();
        if (form.fullname==="" || form.phone_number==="") {
            return false
        }
        addContact([...contacts,form]);
    }
    return (
    <form onSubmit={onSubmit}>        
    <div>
        <div>
            <input name='fullname'
             placeholder='Name' 
             onChange={onChangeInput}
             value={form.fullname}/>
        </div>
        <div>
            <input name='phone_number' 
            placeholder='Phone Number'
            onChange={onChangeInput}
            value={form.phone_number}/>
        </div>
        <div className='btn'>
            <button >Add</button>
        </div>
    </div>
    </form>
  )
}

export default Form