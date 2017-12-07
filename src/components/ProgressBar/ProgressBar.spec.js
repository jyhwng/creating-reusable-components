import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

// describe - group test together
describe('ProgressBar', () => {
    it('getWidthAsPercentofTotalWidth should return 250 with total width of 500 and percent of 50', () => {
        const wrapper = shallow(<ProgressBar percent={50} width={500} />);
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    })
})