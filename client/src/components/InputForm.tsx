import React, {
  useState,
  useEffect,
  Fragment,
  Component,
  useCallback
} from "react";
import { Button, Modal, Form, Dropdown, Icon } from "semantic-ui-react";

const InputForm: React.FC = () => {
  const options = [
    { key: 1, text: "Suspicious", value: 1 },
    { key: 2, text: "Alert", value: 2 },
    { key: 3, text: "Medium", value: 3 },
    { key: 4, text: "Requires attention", value: 4 },
    { key: 5, text: "Urgent", value: 5 }
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
            <Form.Field>
              <label>Tite</label>
              <input placeholder="Title" />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input placeholder="Description" />
            </Form.Field>
            <Form.Field>
              <label>Severity</label>
              <Dropdown clearable options={options} selection />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <input type="file" className="input-file" name="imgUpload" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    </Fragment>
  );
};
export default InputForm;
