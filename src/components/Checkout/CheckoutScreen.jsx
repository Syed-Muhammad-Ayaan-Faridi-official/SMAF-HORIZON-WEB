import React, { useState } from 'react'
import CheckoutRight from './CheckoutRight'
import CheckoutLeft from './CheckoutLeft'
import { ArrowLeft } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient.js'
import { isDiscountActive } from '../../utils/discount.js'
import { validateFormData, isFormValid } from '../../utils/validators.js'

const CheckoutScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    country: '',
    notes: ''
  });

  const [errors, setErrors] = useState({
    name: '', email: '', phone: '', school: '', country: ''
  });

  const [touched, setTouched] = useState({
    name: false, email: false, phone: false, school: false, country: false
  });

  const { cart, setCart } = useCart();

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const Totalfee = (cart) => {
    let totalfee = 0;
    cart.map((T) => {
      totalfee += T.fee;
    })
    return totalfee
  }

  const calculateSeasonalDiscount = (cart) => {
    let discount = 0;
    cart.forEach((T) => {
      discount += (T.fee - T.discountedFee);
    });
    return discount;
  }

  const calculateQuantityDiscount = () => {
    const numItem = cart.length;
    let discount = 0;
    if (numItem < 3) {
      discount = numItem * 500;
    } else if (numItem >= 3 && numItem <= 4) {
      discount = numItem * 1000;
    } else if (numItem >= 5 && numItem <= 8) {
      discount = numItem * 1500;
    }
    return discount
  }

  const calculateDiscount = () => {
    if (isDiscountActive()) {
      return calculateSeasonalDiscount(cart);
    }
    return calculateQuantityDiscount();
  }

  const netFee = () => {
    return Totalfee(cart) - calculateDiscount() + 1000;
  }

  const handleConfirmRegistration = async () => {
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true, school: true, country: true });

    if (!isFormValid(validationErrors)) {
      alert("Please fix the highlighted fields before continuing.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const { error } = await supabase
      .from('registrations')
      .insert([{
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        school: formData.school.trim(),
        country: formData.country.trim(),
        notes: formData.notes,
        cart_items: cart,
        total_fee: Totalfee(cart),
        discount: calculateDiscount(),
        net_fee: netFee()
      }]);

    if (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      return;
    }

    alert("Registration successful!");
    setFormData({
      name: '', email: '', phone: '', school: '',
      country: '', notes: ''
    });
    setErrors({ name: '', email: '', phone: '', school: '', country: '' });
    setTouched({ name: false, email: false, phone: false, school: false, country: false });
    setCart([]);
  };


  return (
    <div className='w-full h-full flex flex-col p-8 max-md:px-3 gap-5'>
      <div className='flex flex-col gap-2 max-sm:px-2 sm:px-5 md:px-0.5'>
        <Link to="/faculty">
          <button className='text-white/80 cursor-pointer flex items-center gap-2 max-sm:gap-0.5 max-sm:text-sm'>
            <ArrowLeft size={18} />
            Back to Faculty
          </button>
        </Link>
        <div className='flex flex-col gap-1'>
          <h1 className='text-white text-3xl lg:text-4xl font-bold'>Complete Your <span className='bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] bg-clip-text text-transparent'>Enrollment</span></h1>
          <h3 className='text-gray-300 max-sm:text-xs'>Confirm your details and review the curriculum selected for each course.</h3>
        </div>
      </div>
      <div className='w-full h-full flex max-md:flex-col gap-3'>
        <CheckoutRight formData={formData} setFormData={setFormData} errors={errors} touched={touched} setTouched={setTouched} />
        <CheckoutLeft cart={cart}
          removeFromCart={removeFromCart}
          onConfirm={handleConfirmRegistration}
          netFee={netFee}
          calculateDiscount={calculateDiscount}
          Totalfee={Totalfee} />
      </div>
    </div>
  )
}

export default CheckoutScreen