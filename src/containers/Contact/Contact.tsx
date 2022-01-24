import { MainLayout } from "../../components/MainLayout";
import { ContactBox, LeftDiv, RightDiv } from "./contactStyles";
import ContactImg from "./images/contact.png";
import { Container } from "react-bootstrap";
import Input from "./../../components/Input/Input";

const Contact = () => {
  return (
    <MainLayout>
      <Container>
        <ContactBox>
          <LeftDiv>
            <div dir="rtl">
              <h2 className="d-flex">
                get in <br /> touch
              </h2>
            </div>
            <div className="d-flex align-items-center">
              <img src={ContactImg} alt="Contact Info" />
              <div>
                <p>contact@e-comm.ng</p>
                <p>+234 4556 6665 34</p>
                <p>
                  20 Prince Hakerem Lekki <br /> Phase 1, Lagos.
                </p>
              </div>
            </div>
          </LeftDiv>
          <RightDiv>
            <Input label="Fullname" placeholder="Enter Your FullName..." />
            <Input label="Email" placeholder="email@gmail.com" />
            <div className="d-flex flex-column message__container">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Type Your Message..."
                name="message"
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send
            </button>
          </RightDiv>
        </ContactBox>
      </Container>
    </MainLayout>
  );
};

export default Contact;
