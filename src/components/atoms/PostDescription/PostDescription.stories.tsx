import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import PostDescription from "@/atoms/PostDescription/PostDescription";

export default {
    title: 'Components/PostDescription',
    component: PostDescription
} as ComponentMeta<typeof PostDescription>;

const Template: ComponentStory<typeof PostDescription> = args => <PostDescription {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "qwe"
};


export const Truncated = Template.bind({});
Truncated.args = {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    truncateCount: 10
};
