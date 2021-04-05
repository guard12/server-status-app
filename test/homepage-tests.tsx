import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import HomePage from '../pages/index'

describe('pages/index', () => {
    let testData
    beforeEach(() => {
        testData = {}
        testData.wrapper = shallow(<HomePage/>)
    })

    it("should render HomePage", () => {
        const header = testData.wrapper.find('h1')
        expect(header).to.have.length(1)

    })
})