import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import HtmlDescription from "@/atoms/HtmlDescription/HtmlDescription";

export default {
    title: 'Components/HtmlDescription',
    component: HtmlDescription
} as ComponentMeta<typeof HtmlDescription>;

const Template: ComponentStory<typeof HtmlDescription> = args => <HtmlDescription {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    html: `
    <h1>Test</h1>
    <p>test p</p>
    <br></br>
    <p>test p</p>
`
};
