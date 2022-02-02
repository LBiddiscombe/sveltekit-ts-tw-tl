/*
Useful reference: https://github.com/robole/svelte-todo-with-tests
*/

import { render, screen } from '@testing-library/svelte'
import Example from './Example.svelte'

describe('Example component', () => {
	it('displays the text "An Example"', async () => {
		render(Example)
		expect(screen.queryByText('An Example')).toBeInTheDocument()
	})
})
