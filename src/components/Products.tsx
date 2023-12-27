import { useState } from "react";
import './products.scss'
import { ratingBox } from "../utilities/utilities";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import {useNavigate} from "react-router-dom"

interface productsProps {
    product : ProductType
}