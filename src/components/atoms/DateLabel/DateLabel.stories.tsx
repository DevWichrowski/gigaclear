import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import DateLabel from "@/atoms/DateLabel/DateLabel";

export default {
    title: 'Components/DataLabel',
    component: DateLabel
} as ComponentMeta<typeof DateLabel>;

const Template: ComponentStory<typeof DateLabel> = args => <DateLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    date: "2023-08-31T22:00:00.000Z"
};
