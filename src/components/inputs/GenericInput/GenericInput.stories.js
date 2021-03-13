import React, { useState } from "react";
import GenericInput from "./index";

const configStoryComponent = {
  component: GenericInput,
  title: "GenericInput"
};

export default configStoryComponent;


const Template = args => {
  const [value, setValue] = useState(args.value);

  return (
    <GenericInput
      value={value}
      handleChangeText={(text) => setValue(text)} {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Email"
};