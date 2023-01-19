import {useForm} from "react-hook-form";
import axios, {AxiosError} from "axios";
import {useState} from "react";
import IFeedback from "./feedback.type";
import styles from '../styles/Feedback.module.scss'


function Feedback() {

    const [success, setSuccess] = useState('')


    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = ()=> (data: IFeedback[]) => {
        console.log(data)
        const baseURL = "http://localhost:3004/feedback";
        axios
            .post(baseURL, data)
            .then((response) => {
                console.log(response)
                setSuccess(response.statusText)

                setTimeout(() => {
                    setSuccess('')
                }, 3000)
            })
            .catch((e: any) => {
                e as AxiosError

                setSuccess(e.response.statusText)

                setTimeout(() => {
                    setSuccess('')
                }, 3000)

                console.log(e)
            })
        reset()

        let formData = {
            name: '1',
        }
    }


    return (
        <div className={styles.contactus} >
            <h1 className={success == "Created" ? styles.success :  styles.error}>{success}</h1>


            <div className={styles.contactus__container}>
                <h1 className={styles.contactus__wrapper__title}>Contact  us</h1>
                <p className={styles.contactus__wrapper__subtitle}>Do you have any kind of help please contact with us.</p>

                <form  className={styles.contactus__wrapper} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={styles.contactus__wrapper__input}
                        type="email"
                        {...register('email', {
                            required: "Поле обезятельно к заполнению",
                        })}
                        placeholder="E-mail"
                    />
                    <div>
                        {errors?.email && <p className={styles.Inter}>{"Поле обезятельно к заполнению" || errors?.email?.message}</p>}
                    </div>
                    <input
                        className={styles.contactus__wrapper__input}
                        {...register('firstname', {
                            required: "Поле обезятельно к заполнению",
                            minLength: {
                                value: 2,
                                message: 'Мин 2'
                            },
                        })}
                        placeholder="Name"
                    />
                    <div>
                        {errors?.firstname && <p className={styles.Inter}>{"Поле обезятельно к заполнению" || errors?.firstname?.message}</p>}
                    </div>
                    <input
                        className={styles.contactus__wrapper__input}
                        {...register('phone', {
                            required: "Поле обезятельно к заполнению",
                            minLength: {
                                value: 2,
                                message: 'Мин 2'
                            },
                        })}
                        placeholder="Phone"
                    />
                    <div>
                        {errors?.phone && <p className={styles.Inter}>{"Поле обезятельно к заполнению" || errors?.phone?.message}</p>}
                    </div>


                    <button className={styles.contactus__wrapper__button} type="submit" disabled={!isValid}>
                        Send
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Feedback;