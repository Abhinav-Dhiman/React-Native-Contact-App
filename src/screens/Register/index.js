import axios from 'axios';
import React, {useState, useEffect} from 'react';
import RegisterComponent from '../../components/RegisterComponent';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInterceptors';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // useEffect(() => {
  //   axiosInstance.get('/contacts').catch(err => {
  //     console.log(err.response);
  //   });
  // }, []);

  // console.log('BACKEND_URL', envs);
  // console.log(__DEV__);
  //console.log('form', form);
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'Password should be atleast 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onSubmit = () => {
    //validations
    //console.log('form', form);
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please provide a User Name *'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please provide a first Name *'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please provide a last Name *'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter an Email *'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a Password *'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log('clicked');
      console.log('form', form);
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
