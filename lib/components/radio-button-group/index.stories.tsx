import { Meta, StoryObj } from "@storybook/react";
import { RadioButtonGroup } from ".";
import classNames from "classnames";

const meta: Meta<typeof RadioButtonGroup> = {
  component: RadioButtonGroup,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof RadioButtonGroup>;

export const Example: Story = {
  args: {
    options: [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
      {
        label: "Option 4",
        value: 4,
      },
    ],
  },
};

export const RenderOption: Story = {
  args: {
    options: [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Correct Option",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
      {
        label: "Option 4",
        value: 4,
      },
    ],
    renderOption({ state, option, key, onChange }) {
      return (
        <div
          key={key}
          onClick={() => {
            onChange && onChange(option.value);
          }}
          className={classNames([
            "border-solid border-[1px] rounded-xl h-10 flex items-center px-4 hover:cursor-pointer select-none",
            {
              "border-slate-200": state !== option.value,
              "border-mediumSeaGreen text-mediumSeaGreen":
                state === 2 && option.value === state,
              "border-coral text-coral": state !== 2 && option.value === state,
            },
          ])}
        >
          {option.label}
        </div>
      );
    },
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<RadioButtonGroup
  options={[
    {
      label: 'Option 1',
      value: 1
    },
    {
      label: 'Correct Option',
      value: 2
    },
    {
      label: 'Option 3',
      value: 3
    },
    {
      label: 'Option 4',
      value: 4
    }
  ]}
  renderOption={({ state, option, key, onChange }) => {
   return (
     <div
       key={key}
       onClick={() => {
         onChange && onChange(option.value);
       }}
       className={classNames([
        "border-solid border-[1px] rounded-xl h-10 flex items-center px-4 hover:cursor-pointer",
        {
          "border-slate-200": state !== option.value,
          "border-mediumSeaGreen text-mediumSeaGreen":
            state === 2 && option.value === state,
          "border-coral text-coral": state !== 2 && option.value === state,
        },
      ])}
     >
       {option.label}
     </div>
   );
  }}
/>
          `,
      },
    },
  },
};

export default meta;
