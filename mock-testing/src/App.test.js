import {render, screen} from '@testing-library/react';
import App from './App';
import {api} from './api.js'
import axios from 'axios';
import TestComponent from "./components/TestComponent";

jest.mock('axios')

test('get all the elements in db and render them', async () => {
    const {container} = render(<TestComponent/>);

    const res = await api.products()
    expect(res.data.length).toBe(3)

    expect(container).toHaveTextContent("Apple")
    expect(container).toHaveTextContent("Beans")
    expect(container).toHaveTextContent("Oranges")
});
