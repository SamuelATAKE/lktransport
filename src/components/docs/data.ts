export interface VenueOption {
    readonly value: string;
    readonly id: number;
    readonly name: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

export const venues: VenueOption[] = [
    {id: 1, name: "Lomé", value: "Lomé"},
    {id: 2, name: "Atakpamé", value: "Atakpamé"},
    {id: 3, name: "Sokodé", value: "Sokodé"},
    {id: 4, name: "Kara", value: "Kara"},
    {id: 5, name: "Mango", value: "Mango"},
    {id: 6, name: "Dapaong", value: "Dapaong"},
    {id: 7, name: "Cinkassé", value: "Cinkassé"},
];