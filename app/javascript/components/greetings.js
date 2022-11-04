import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingsSlice';

const Greetings = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);
  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
};

export default Greetings;
