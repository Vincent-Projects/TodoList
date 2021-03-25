import React from "react";
import { Story } from "@storybook/react";
import GenericNotification, { GenericNotificationProps } from "./index";
import GenericButton from "components/buttons/GenericButton";

const configStoryComponent = {
  component: GenericNotification,
  title: "GenericNotification"
};

export default configStoryComponent;

const Template: Story<GenericNotificationProps> = args => <GenericNotification {...args} />

export const Default = Template.bind({});
Default.args = {
  text: "Default text inside notification popup",
};

export const NotificationSingleBtn = Template.bind({});
NotificationSingleBtn.args = {
  text: "Notification with a single button",
  actions: (
    <GenericButton
      text="X"
      handleClick={() => alert("Something")}
    />
  )
};