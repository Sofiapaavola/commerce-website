import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Shop() {
    const [products] = useState ([
        {
            name: 'Fenty MatchStix Trio',
            cost: '$30.00',
            image: "https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"
        }, 
        {
            name: 'Fenty Foundation',
            cost: '$60.00',
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NEA8NDQ0NDw0NDw0PDQgNDQ8ODQ0NFREWFhURHxMYHSghJBolGxMTJD0hKCk3Oi4uFx8zOD8uNzAtLzABCgoKDg0OGBAPGisdHR0tLS0rLS0rKystLS0tLSstLSstKy0tLSstKy0rLTc3Ky03LS03KzctLS0tKystNy0rLf/AABEIAOoA1wMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EADcQAQABAgIHBQUHBQEAAAAAAAABAgMEEQUSITEysbI0QXFyggYic4GREyMzUVLB0UJUkqHCk//EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACMRAQEAAQMFAQADAQAAAAAAAAABAwIRMgQSEzEzURQhQSL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAMZx+YMTcpjvj6gxF2j9VP+UA2iQZAAAAAAAAAAAAAAAAAAAABiQZBrUCPfVTEOjiEs4ydTOqj3ZiM9mxItYSqAAAAAAAAAAAAAAAAAAAAxIMg1qBHvoTEOjiQk0luq8shFrTujwWVZAAAAAAAAAAAAAAAAAAABiQZBrUCPfQmIdHFCEmkt1XlnkEWlvdHhCyrYAAAAAAAAAAAAAAAAAAAGJBkGtQI99CYh0cUISaR3T5Z5JFpa4afCOSVWwAAAAAAAAAAAAAAAAAAAMSDINagR76ExDp4oQsY/dPlnkIWdjhp8tPJZVuAAAAAAAAAAAAAAAAAAADEgyDFQI95CYhU8UIWMd3+E8hCxw3BR5aeS0VeoAAAAAAAAAAAAAAAAAAAMAyDWoEe9CExAnPW3zH0QlnFxP6pnZ3xH8AssHP3dvyUckxWvZIAAAAAAAAAAAAAAAAAAAxIMg1qBHvoTECrehLbF/sUWGA/Ct+SnksrXuAAAAAAAAAAAAAAAAAAACBpjE126Kfs5yrrqimKsonKN873LNk7NLrhx9+r+1ZVevzvv1x4RTH7MXn1/rZMOP8AEO/Xd/ub/wAq5jkjza/1eYdH4rcRVd/u8V8r9z+Ty6/1Pi0fiDV9r3YzF/8AvX/KfLr/AE8Oj8JxGKiNmMvzl3V1RVzhMzakXBo29PoGhcR9rh7NyIy1qI92duUxsnk3aNXdplebr09uqxOXVAAAAAAAAAAAAAAAAAAAVem91rzz0yy9VxjV0vuoFTE2RDxAurMQEQ6kpBDuPZfslnwr65ejh4R5ef6VbOrkAAAAAAAAAAAAAAAAAAAq9ObrXnnpZeq4xq6XlUCWNsiJfQurMRARDqSkiAdv7L9ks+FfXL0MPCPLz/SrZ2cQAAAAAAAAAAAAAAAAAAFXp3db8/8AzLL1XGNXS8qgSxtkQ76F0K7djVqpmmmZmJyr1ac42T3+OX0XmqbbKdt33lVqrozSDuPZfslnwr65ehh4R5ef6VauziAAAAAAAAAAAAAAAAAAArNO8Nv4n/Ms3VcWnpeVV8sTaiYhC8Q8Rep1dTUjhy1sqc88p255Z98fRfumzn23fdVyq6s0g7n2Z7LZ8K+uXoYeEeXn+lWjs4gAAAAAAAAAAAAAAAAAAKzTvDb+JHTLN1XFp6XnVfLE2ol9C6HibtP2c07dbKcpi3R9Jq3undNnPa77qpR1b0IHc+zfZbXhX1y9HBwjys/0qzdnIAAAAAAAAAAAAAAAAAABWad4KPiR0yzdVxael5q+WJtQ76FkG7XRETE0bdWqIqzz2905LSxG1VsqrvW1CR3Hs72a14VdUvQw8I8rP9KsnZyAAAAAAAAAAAAAAAAAAAVunOCj4kdMs3U8WnpeaulibUPEIXQL1ymKZjVjOY2XI2z9J/ZaWbK7XdWyhZIsQJdvoDs1rwq6pehh4R5Wf6VYuzkAAAAAAAAAAAAAAAAAAArdOcFHxI6ZZup4tPS81bO5ibYiX0Lq/EWa8tbVnVyz1stmS3bUd0V6qyVhoSO00D2e34VdUvQwcI8vP9KsXZxAAAAAAAAAAAAAAAAAAAV2m+Cn4kcpZup4tHS81ZO5hbkS+LomJm7qcM6mXHqf0+Pzl031bOcmndUubqmYURXaaC7Pb9XVL0cPCPLz/SrB2cgAAAAAAAAAAAAAAAAAAFfprgp89PKWfqeDR03NVzuYG6Il8XQ8VXcind7sxq62WzLbG/5r/wB7KTTp3VSrom4URXZ6D7Pb9XVL0MHCPLz/AEqwdnIAAAAAAAAAAAAAAAAAABA0zH3ceenlLP1PBo6bmqu5gbkS+LomIquamURMUbc5iMs/zzn5f6X3u2ym2ndVKuiZhUIrtNCfgW/V1S9HDwjy8/0qe7OQAAAAAAAAAAAAAAAAAACDpaPu/VDjnn/Ltg5KnuYNXtv0ol9V0iDia5qjLVpnKOLKdaKYX3t/pXtku6tlVdNwkCHaaF/Ao9fVL0MHCPLz/Spzs5AAAAAAAAAAAAAAAAAAAIelOD1Q5ZfTpi5KiWDXNq9DRd4h31HWIV2u5q1RE1amWUxPDESvLdlbJurJ3qLrDBQIrsdDfg0erql6OHhHl5/pU52cgAAAAAAAAAAAAAAAAAAETSUe5Hmhzyel8ftUVxkxZptW7Fd4hX3FoV+Iu1ZTTnOr+mdsQtLUdsQJ3oWWWDgk3V1XZ1+h4+5o9XVL0cU20R5ma766murkAAAAAAAAAAAAAAAAAAAi6Q4Y81Kuv0to9qvEU97Nl0bxpxa9qrsSxtsqrvpS8LduZkKucDhpd8WP/azZcn+R1GjqcrdMflrdUtumbRh1+0lZUAAAAAAAAAAAAAAAAAABF0hHux5qUX0tp9odVOcKWLy7Id7CZ7nLVildNOWxCuaPzc/48dv5Fb2cBEL6cMimrNas8NaiHaRwtqzwke7HjVzleOdeyUAAAAAAAAAAAAAAAAAAAI2P4PVTzRU6faGhclA0qQlrkIe9pKE3C8Pzq5rRWvZKAAAAAAAAAAAAAAAAAAAEbSHB4VU/TNFTp9oGspu6bNZrRuntYqmYEPOLqO6LdqRZuLbq2LHCcPzq5rxzr2SgAAAAAAAAAAAAAAAAAABiYz2Tu/IHhVg7c/05eEzCt0RbvrznR9uf1f5K+OJ8lJ0fRO+a/rH8J7Id9Yp0baj9XzqR49KfLqe9vDW6d1MfPatNMit1WvaFlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
        },
        {
            name: 'Fenty Foundation',
            cost: '$60.00',
            image: "data:image/jpeg;base64,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"
        },
        {
            name: 'Fenty Foundation',
            cost: '$60.00',
            image: "data:image/jpeg;base64,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"
        },
    ]);

    return (
        <Container fluid>
          <h1> Products </h1> 
            <Row className="justify-content-sm-center">
                {products.map((product) => (
                    <Col xs={1} md={2} style={{textAlign: 'center', margin: '10px'}}>
                        <h3> {product.name} </h3>
                        <h4> {product.cost} </h4> 
                        <img style={{height: '200px', width: '200px'}} src={product.image} alt={product.name}></img>
                        <button>Add to cart</button>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
