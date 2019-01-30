/* eslint-disable no-console, react/prop-types */
import React from 'react';
import IconSettings from '~/components/icon-settings';
import DuelingPicklist from '~/components/dueling-picklist';
import duelingPicklistFilter from '~/components/dueling-picklist/filter';

const fruitOptions = 'Apple,Banana,Orange,Pear,Watermelon'
	.split(',')
	.map((fruit, i) => ({
		id: `${i}`,
		label: fruit,
	}));

const ids = {
	picklistGroupLabel: 'picklist-label-4',
	dragLiveRegion: 'drag-live-region-4',
	optionDragLabel: 'option-drag-label-4',
	optionsLabel: 'options-label-4',
	selectedLabel: 'selected-label-4',
};

class Example extends React.Component {
	static displayName = 'DuelingPicklistExample';

	state = {
		options: fruitOptions,
		selected: fruitOptions.slice(-2),
	};

	handleChange = (selected) => {
		this.setState({ selected });
	};

	render() {
		const { selected } = this.state;
		const options = duelingPicklistFilter({
			options: this.state.options,
			selected,
		});
		return (
			<IconSettings iconPath="/assets/icons">
				<DuelingPicklist
					options={options}
					selected={selected}
					events={{
						onChange: this.handleChange,
					}}
					ids={ids}
					isReorderable
				/>
			</IconSettings>
		);
	}
}

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
