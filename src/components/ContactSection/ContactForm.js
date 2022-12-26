import React, { useState } from 'react';
import { uploadForm, useAuthDispatch, useContentState} from '../../context';
import { useHistory } from "react-router-dom";

const ContactForm = props => {
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ subject, setSubject] = useState("");
    const [ message, setMessage] = useState("");
    const dispatch = useAuthDispatch();
    const contentDetails = useContentState();
    const history = useHistory()

    const handleNext = () => {
            capture()
    };
    const capture = async () => {
        const date = new Date();
        const formData = {
            collectionName: 'contactForm',  //This Variable needs to be chnaged for each component and Firebase Collection
            name: name,
            email: email,
            subject: subject,
            message: message,
            date: date,
        }
        console.log(' Stepper/capture ->formData:', formData);
        try {
        let response = await uploadForm(dispatch, {formData});
            console.log('ContactForm/capture -> COMPLETED')
            history.push('/mensaje-enviado')
        } catch (error) {
        //console.log('Error: Signup-> handleSignUp ' ,error);
        }
        //setLoading(true);        
}

    return (
      <div className="contact-box text-center">
        <form
          onSubmit={e => { e.preventDefault(); handleNext() }}
          className="contact-form"
          noValidate="novalidate"
        >
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nombre"
                required="required"
                onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Asunto (título)"
                required="required"
                onChange={(e) => setSubject(e.target.value)} 
                />
              </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <textarea
                    className="form-control"
                    name="message"
                    placeholder="Escríbenos tus dudas ..."
                    required="required"
                    onChange={(e) => setMessage(e.target.value)} 
                    />
                </div>
            </div>
            <div className="col-12">
                <button
                    type="submit"
                    className="btn btn-lg btn-block mt-3"><span className="text-white pr-3"><i className="fas fa-paper-plane" /></span>
                    Enviar
                </button>
            </div>
          </div>
        </form>
      </div>
    );
}
export default ContactForm;