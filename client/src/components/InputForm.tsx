import React, { useState, Fragment } from "react";
import {
  Button,
  Modal,
  Form,
  Dropdown,
  Icon,
  InputOnChangeData,
  DropdownProps
} from "semantic-ui-react";

import ImageUploader from "react-images-upload";
import * as Storage from "@google-cloud/storage";

interface IForm {
  narrative: String;
  description: String;
  severity: any;
  latitude: String;
  longitude: String;
  offense_date: String;
  image?: any;
}

const InputForm: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    narrative: "",
    description: "",
    severity: "Suspicious",
    latitude: "",
    longitude: "",
    offense_date: ""
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    
  };

  const handleImageUpload = (images: any) => {
    const img = images[0];
    setForm({ ...form, image: img });
  };

  const handleDropdownChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    let { value } = data;
    setForm({ ...form, severity: value });
  };

  const options = [
    { key: 1, text: "Suspicious", value: "Suspicious" },
    { key: 2, text: "Alert", value: "Alert" },
    { key: 3, text: "Medium", value: "Medium" },
    { key: 4, text: "Requires attention", value: "Requires attention" },
    { key: 5, text: "Urgent", value: "Urgent" }
  ];

  return (
    <Fragment>
      <Modal
        trigger={
          <Button size="large" color="red" icon labelPosition="left">
            <Icon name="bullhorn" />
            Report
          </Button>
        }
      >
        <Modal.Header>Report an Incident</Modal.Header>
        <Modal.Content>
          <Form style={{ padding: 45 }}>
            <Form.Input
              label="Title"
              name="narrative"
              value={form.narrative}
              placeholder="Bike Theft"
              onChange={handleFormChange}
            />
            <Form.Input
              label="Desription"
              name="description"
              value={form.description}
              placeholder="Describe the details of what happened"
              onChange={handleFormChange}
            />
            <Form.Field>
              <label>Severity</label>
              <Dropdown
                onChange={handleDropdownChange}
                name="severity"
                value={form.severity}
                options={options}
                selection
              />
            </Form.Field>
            <Form.Field>
              <ImageUploader
                withIcon={true}
                buttonText="Upload Image"
                onChange={handleImageUpload}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
              {/* <label>Image</label>
              <input type="file" className="input-file" name="imgUpload" /> */}
            </Form.Field>
            <Button onClick={handleSubmit} primary size="big" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </Fragment>
  );
};
export default InputForm;
