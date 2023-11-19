import { PiUserCircleMinusDuotone } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { selectVisibleContacts } from '../redux/contacts/selectors';
import { delContact } from '../redux/contacts/operations';
import { fetchContacts } from '../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  const deleteContact = (id, name) => {
    toast.success(`${name} has been successfully deleted from your contacts`);
    return dispatch(delContact(id));
  };

  return (
    <ul className='max-h-[55vh] overflow-y-auto scrollbar-none'>
      {visibleContacts.length ? (
        visibleContacts.map(({ id, name, number }) => (
          <li key={id} className='mb-2 flex items-center justify-between gap-2'>
            <div className='flex items-center justify-between w-10/12'>
              <span className='w-1/2 text-sm overflow-hidden max-[375px]:text-xs'>{name}:</span>
              <span className='overflow-hidden text-sm max-[375px]:text-xs'>{number}</span>
            </div>
            <button
              type='button'
              onClick={() => deleteContact(id, name)}
              className='flex rounded-lg bg-rose-500 px-2 py-[2px] hover:bg-rose-700 hover:stroke-black active:bg-rose-700 max-[375px]:text-xs max-[375px]:gap-1'
            >
              <PiUserCircleMinusDuotone />
            </button>
          </li>
        ))
      ) : (
        <p className='text-center'>Contacts not found</p>
      )}
    </ul>
  );
};
