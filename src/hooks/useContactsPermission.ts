import {useState, useEffect} from 'react';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import {showToast} from '../components/common/ToastBanner';

export interface ContactProps {
  displayName: string;
  phoneNumber: string;
  recordId: string;
  thumbnailPath: string;
  hasThumbnail: boolean;
}

const useContactsPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.READ_CONTACTS);

    if (result === RESULTS.GRANTED) {
      setHasPermission(true);
      loadContacts();
    } else if (result === RESULTS.DENIED || result === RESULTS.BLOCKED) {
      setHasPermission(false);
    }
  };

  const requestPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.READ_CONTACTS);

    if (result === RESULTS.GRANTED) {
      setHasPermission(true);
      loadContacts();
    } else {
      showToast({
        title: 'Permission Denied',
        message:
          'To load contacts, we need access to your contacts. Please enable permissions in your settings.',
      });
    }
  };

  const loadContacts = () => {
    setLoading(true);
    Contacts.getAll()
      .then(contacts => {
        const data =  contacts.map((contact) => {
          const phoneNumber = contact.phoneNumbers?.[0]?.number || ''; // Get the first phone number
          const displayName = contact.displayName || '';
          const recordId = contact.recordID || '';
          const thumbnailPath = contact.thumbnailPath || '';
          const hasThumbnail = contact.hasThumbnail || false;
      
          return {
            displayName,
            phoneNumber,
            recordId,
            thumbnailPath,
            hasThumbnail,
          };
        });
        setContacts(data);
      })
      .catch(error => {
        console.error(error);
        setContacts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    hasPermission,
    contacts,
    loading,
    requestPermission,
  };
};

export default useContactsPermission;
