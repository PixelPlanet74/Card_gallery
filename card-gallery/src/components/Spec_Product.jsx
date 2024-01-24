import React from 'react'
import { useParams } from 'react-router-dom'
import { products_data } from '../utils/products_data'
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'

const Spec_Product = () => {
    const params = useParams(
    )
    console.log(params.id)

    const filteredData = products_data.filter((data) => {
        return (
            data.id == params.id
        )
    })
    // console.log(filteredData)

   return filteredData.map((data, index) => {
        const { title, price, description, images, category: { name, image } } = data
        return (
            <>
                <Card key={index} elevation={1} className=''>
                    <CardMedia
                        className='aspect-square w-full object-cover'
                        image={images[0]}
                        title={title}
                    />
                    <CardContent className='space-y-6'>


                        <Stack>
                            <Typography noWrap gutterBottom variant="h6" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description.substring(0, 45)}...
                            </Typography>
                        </Stack>


                        <Stack flexDirection='row' alignItems='center' gap={1}>
                            <Avatar sx={{ width: 24, height: 24 }} alt={name} src={image} />
                            <Typography>
                                {name}
                            </Typography>
                        </Stack>



                        <Stack  >

                            <Typography variant="body" fontWeight='bold' className='text-3xl font-bold text-orange-400' >
                                ${price}
                            </Typography>

                        </Stack>



                    </CardContent>

                </Card>
                {                console.log(data)}
            </>
        )


    })
    return (
        <>
            <div className=""> Product Details: {params.id}</div>

        </>
    )
}

export default Spec_Product