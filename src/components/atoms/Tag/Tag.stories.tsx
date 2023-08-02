import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import DateLabel from "@/atoms/DateLabel/DateLabel";
import Tag from "@/atoms/Tag/Tag";

export default {
    title: 'Components/Tag',
    component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Test"
};
