import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Product_Card = ({ data }) => {

        

    const { title, price, description, image } = data
    return (
        <>

            <Card elevation={1} className=''>
                <CardMedia
                    className='aspect-square w-full object-cover'
                    image={image}
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

                    <Stack  >
                        <Link to = {`/products/${data.id}`}>
                            <Typography variant="body" fontWeight='bold' className='text-3xl font-bold text-orange-400' >
                                <button func = {()=>getItem(data[data.id].images)}>View More</button>
                            </Typography>
                        </Link>

                    </Stack>



                </CardContent>

            </Card>

        </>
    )
}
