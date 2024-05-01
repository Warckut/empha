import { useEffect, useState } from "react";
import { useAddUserMutation } from "../../api/apiSlice";
import UserForm from "../../components/UserForm/UserForm";
import Popup from "../../components/Popup/Popup";
import Loading from "../../components/Loading/Loading";

const AddUser = () => {
  const [addUser, result] = useAddUserMutation();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupMes, setPopupMes] = useState("");

  const openPopup = (message: string) => {
    setPopupOpen(true);
    setPopupMes(message);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (result.isSuccess) {
      openPopup("User is created!");
    }
    if (result.isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      openPopup(String(Object.values((result.error as any).data)[0]));
    }
  }, [result]);

  return (
    <div className="container">
      {result.isLoading && <Loading />}
      <Popup isOpen={isPopupOpen} message={popupMes} onClose={closePopup} />
      <h1>Add user</h1>
      <UserForm onSubmit={(user) => addUser(user)} />
    </div>
  );
};

export default AddUser;
