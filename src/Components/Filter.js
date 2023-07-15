import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Cartstate } from './Context';

function Filter() {
  const {productDispatch,productState:{stock,sort},}=Cartstate()
  return (
    <div className=' text-white p-4 fs-5'>
        {/* for sorting */}

        {/* for radio buttons  */}
        <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Ascending`}
            name='sort'
            onChange={()=>productDispatch({
              type:'sortbyprice',
              payload:'lowtohigh',
            })}
            checked={sort==='lowtohigh'?true:false}
          />

          <Form.Check // prettier-ignore
            type={type}
            id={`disabled-default-${type}`}
            label={`Descending`}
            name='sort'
            onChange={()=>productDispatch({
              type:'sortbyprice',
              payload:'hightolow',
            })}
            checked={sort==='hightolow'?true:false}
          />


          {/* <Form.Check
            type={type}
            label={`Descending`}
            id={`disabled-default-${type}`}
            name='sort'
          /> */}
        </div>
      ))}
    </Form>
    
    {/* for checkbox */}
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Out of Stock`}
            name='sort'
            onChange={()=>productDispatch({
              type:'filterbystock'
            })}
            checked={stock}
          />
        </div>
      ))}
    </Form>

    {/* we can also write simple checkbox */}
    {/* <input type='checkbox'/> Out of Stock */}

    <Button variant="secondary" className='mt-3 fs-4'
    onClick={()=>productDispatch({
      type:'clearfilters',
    })}>Clear Filters</Button>{' '}

    </div>
  )
}

export default Filter