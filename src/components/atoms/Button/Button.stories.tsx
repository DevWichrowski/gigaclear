import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import Button from "@/atoms/Button/Button";

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Test',
    link: "#"
};
