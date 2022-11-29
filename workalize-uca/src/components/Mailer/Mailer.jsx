import classes from './Mailer.module.scss';
import emailjs from 'emailjs';

const Mailer = () => {
    
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_z1rumds', 'template_bn1l4uh', event.target, 'Ck4TPMbVWCbhGuoO0')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
            <div className={classes["container"]}>
                <form onSubmit={sendEmail} className={classes["form_container"]}>
        
                    <h2>Last step</h2>
                    <label>
                        Full name
                        <input
                        type={"text"}
                        placeholder="e.g. Mario Martinez"
                        name="full_name"/>
                    </label>

                    <label>
                        For:
                        <input
                        type={"user_email"}
                        placeholder="e.g. example@example.com"
                        autoComplete="email"
                        name="email" />
                    </label>

                    <label>
                        Message: 
                            <textarea
                            name="user_message"
                            rows={5}
                            placeholder="message " />
                    </label>
                    <button className={classes["sendButton"]} >Send!</button>

                </form>
            </div>
          )
        }


export default Mailer;