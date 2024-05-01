import { useEffect, useState } from "react";
import { useGetUsersQuery, useUpdateUserMutation } from "../../api/apiSlice";
import { useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import Popup from "../../components/Popup/Popup";
import Loading from "../../components/Loading/Loading";

const EditUser = () => {
  const { data: users } = useGetUsersQuery();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupMes, setPopupMes] = useState("");
  const [updateUser, result] = useUpdateUserMutation();
  const { userId } = useParams();
  const user = users?.find((u: { id: number }) => u.id === Number(userId));

  const openPopup = (message: string) => {
    setPopupOpen(true);
    setPopupMes(message);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (result.isSuccess) {
      openPopup("User is updated!");
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
      <h1>Edit profile</h1>
      <UserForm
        defaultValues={user}
        onSubmit={(user) => updateUser({ id: Number(userId), ...user })}
      />
    </div>
  );
};

export default EditUser;
