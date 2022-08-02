import { useDispatch } from "react-redux/es/exports";

import { Modal, ModalTitle, ModalButtonClose } from "../../styles/modal";
import { Form, GroupLabelInput, FormButton } from "../../styles/form";

const FormPlayer = () => {

    const dispatch = useDispatch();
    const closeModal = () => dispatch({type: "modal/players"});

    return(
        <Modal>
            <header>
                <ModalTitle>ADD <b>PLAYER</b></ModalTitle>

                <ModalButtonClose onClick={closeModal}>
                    <span class="material-symbols-outlined">close</span>
                </ModalButtonClose>
            </header>

            <Form>
                <GroupLabelInput>
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <span>an error can appears here</span>
                </GroupLabelInput>

                <GroupLabelInput>
                    <label>Age:</label>
                    <input type="number" name="age" />
                    <span>an error can appears here</span>
                </GroupLabelInput>

                <GroupLabelInput>
                    <label>Level:</label>
                    <input type="number" name="level" />
                    <span>an error can appears here</span>
                </GroupLabelInput>

                <FormButton>Register</FormButton>
            </Form>

        </Modal>
    )
}

export default FormPlayer;