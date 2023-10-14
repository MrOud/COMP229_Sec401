import { useForm } from 'react-hook-form'
import './rhf.css'

export default function Rhf() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="hook">
        <label className='hook__text'>Email</label>
        <input
            type="email"
            className='hook__input'
            {...register('email', {required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
            <p className='hook__error'>Valid email required</p>
        )}

        <label className='hook__text'>Password</label>
        <input
            type="password"
            className='hook__input'
            {...register('password', {required: true })}
        />
        {errors.password && (
            <p className='hook__error'>Password required</p>
        )}

        <button className='hook_button' type='submit'>Submit</button>
    </form>
}