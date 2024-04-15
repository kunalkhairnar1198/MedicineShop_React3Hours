import React from 'react'
import { Button ,Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <h2>MedicineShop</h2>
      <Button>
        Cart {1}
      </Button>
    </Navbar>
  )
}

export default Header
