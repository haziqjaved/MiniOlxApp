import { useState } from 'react';
import { registerUser } from '../../config/firebase';
import '../Auth/index.css';

export default function Auth() {
    const [load, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')

    //SignUp Function

    const signUp = async () => {
        setLoading(true)
        try 
        {await registerUser({ fullname, email, password }) 
        alert('Succecfully Signed UP')
        }catch(e){alert(e.message) }
        setLoading(false)
    }
    return (
        <div align='center'>
            <fieldset style={{ width: 450, height: 540 }}>
                <legend align='center' >Sign Up</legend>
                <label className='name'>Fullname:<br />
                    <input style={{ width: 320 }}
                        onChange={e => setFullName(e.target.value)}
                        type="text" placeholder="Write your fullname" /></label><br />
                <label className='email'>Email:<br />
                    <input style={{ width: 320 }}
                        onChange={e => setEmail(e.target.value)}
                        type="email" placeholder="Write your email" /></label><br />
                <label className='pass'>Password:<br />
                    <input style={{ width: 320 }}
                        onChange={e => setPassword(e.target.value)}
                        type="password" placeholder="Write your password" />
                    <br /><br />
                    {load ?
                        <img width="80" src='https://i.gifer.com/4V0b.gif' /> :
                        <button className='signupBtn' onClick={signUp}>SignUp</button>
                    }
                </label>
            </fieldset>
        </div>);
}