import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { ServerList } from '../components/dashboard/server-list'
import { ServerItemStyled } from '../components/dashboard/styles'
import servers from './data'

describe('components/dashboard/server-list.tsx', () => {
    let testData
    beforeEach(() => {
        testData = {
            props: {
                items: servers,
                selectedItemId: null,
            }
        }
        testData.wrapper = shallow(<ServerList {...testData.props }/>)
    })

    it("should render list of 4 servers", () => {
        const serverList = testData.wrapper.find(ServerItemStyled)
        expect(serverList).to.have.length(4)
    })

    it("each server should contain a name", () => {
        const serverList = testData.wrapper.find(ServerItemStyled)
       
        serverList.forEach(server => {
            expect(server.contains(<strong>Name:</strong>)).to.be.equal(true)
        })
    })
})