import * as yup from 'yup'
export const LoginValidationSchema = yup.object().shape({
    mobilenumber: yup.string()
        .min(10, ({ min }) => `Please enter ${min} digits mobile number`)
        .required('Mobile number is required')
        .matches(
            new RegExp(/^[0-9\b\+\(\)]+$/),
            'Mobile number contains digits only',
        ),
})

export const SignupValidationSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[a-zA-Z0-9 ]*$/, 'Special characters are not allowed')
        .required('Name is required'),
    shopname: yup
        .string()
        .matches(/^[a-zA-Z0-9 ]*$/, 'Special characters are not allowed')
        .required('Shop name is required'),
    mobilenumber: yup
        .string()
        .min(10, ({ min }) => `Please enter ${min} digits mobile number`)
        .required('Mobile number is required')
        .matches(
            new RegExp(/^[0-9\b\+\(\)]+$/),
            'Mobile number contains digits only',
        ),
    address: yup
        .string()
        .required('Address is required'),
    pincode: yup
        .string()
        .min(6, ({ min }) => `At least ${min} characters`)
        .required('Pin Code is required')
        .matches(
            new RegExp(/^[0-9\b\+\(\)]+$/),
            'Pin Code contains digits only',
        ),
    state: yup
        .string()
        .required('State is required'),
    district: yup
        .string()
        .required('District is required'),
    role: yup
        .string()
        .required('Role is required'),
    tehsil: yup
        .string()
        .required('Tehsil is required'),
})
export const complainValidation = yup.object({
    serialNumber: yup
        .string()
        .min(6, ({ min }) => `At least ${min} characters`)
        .required('Serial number is required'),
    productDescription: yup
        .string()
        .required('Product description is required'),
    complaintType: yup
        .string()
        .required('Complaint type is required'),
    contactNo: yup
        .string()
        .required('Mobile number is required')
        .min(10, ({ min }) => `Please enter ${min} valid number`),
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required'),
    sellerName: yup.string()
        .required('Seller name is required')
        .min(3, 'Seller name must be at least 3 characters'),
    customerBillDate: yup.string()
        .required('Customer bill date is required'),
    warrantyEndDate: yup.string()
        .required('Warranty end date is required'),
    customerBillNumber: yup.string()
        .required('Customer Bill Number is required'),
    address: yup
        .string()
        .required('Address is required'),
    pincode: yup
        .string()
        .min(6, ({ min }) => `At least ${min} characters`)
        .required('Pin code is required'),
    invoiceAttachment: yup
        .string().
        required('Invoice attachment is required'),
    productImage: yup
        .string().
        required('Product Image is required'),
});
export const accountValidation = yup.object({
    holderName: yup.string()
        .required('Account holder name is required')
        .min(3, 'Account holder name must be at least 3 characters'),
    accountNo: yup.string()
        .required('Account number is required')
        .min(9, 'Account number must be at least 9 characters')
        .matches(new RegExp(/^[0-9]{9,18}$/), 'Invalid account number'),
    ifsc: yup.string()
        .required('IFSC code is required')
        .min(6, 'IFSC code must be exactly 11 characters'),
    bankName: yup.string().required('Bank name is required'),
});

export const KYCValidation = yup.object({
    aadharNo: yup.string()
        .min(12, ({ min }) => `Aadhar number must be ${min} digits`)
        .max(12, ({ max }) => `Aadhar number must be ${max} digits`)
        .required('Aadhar number is required')
        .matches(
            new RegExp(/^[0-9\b\+\(\)]+$/),
            'Aadhar number contains digits only',
        ),
    panNo: yup.string()
        .required('PAN number is required')
        .matches(
            new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/),
            'Please enter valid PAN number',
        ),
    // gstNo: yup.string()
    //     .required('GST number is required'),
    // .matches(
    //     new RegExp(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/),
    //     'Please enter valid GST number',
    // )

    // holderName: yup.string()
    //     .required('Account holder name is required')
    //     .min(3, 'Account holder name must be at least 3 characters'),
    // accountNo: yup.string()
    //     .required('Account number is required')
    //     .min(9, 'Account number must be at least 9 characters')
    //     .matches(new RegExp(/^[0-9]{9,18}$/), 'Invalid account number'),
    // ifsc: yup.string()
    //     .required('IFSC code is required')
    //     .min(6, 'IFSC code must be exactly 11 characters'),
    // bankName: yup.string().required('Bank name is required'),
    aadharImage: yup.mixed().required('AADHAR Front image is required'),
    aadharBackImage: yup.mixed().required('AADHAR Back image is required'),
    // panCardImage: yup.mixed().required('PAN card image is required'),
    // passbookImage: yup.mixed().required('Passbook image is required'),
    // gstImage: yup.mixed().required('GST image is required'),
});

export const DamageQrcodeValidation = yup.object({
    attactmentFirst: yup.mixed().required('Attactment first image is required'),
    attactmentSecond: yup.mixed().required('Attactment second image is required'),
    attactmentThird: yup.mixed().required('Attactment third image is required'),
});


export const warrantyValidation = yup.object().shape({
    serialNumber: yup.string().required('Serial number is required'),
    productName: yup.string().required('Product description is required'),
    mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    name: yup.string().required('Name is required'),
    address: yup.string().required('Address is required'),
    pincode: yup.string().required('Pin code is required'),
    customerSaleBillNumber: yup.string().required('Customer sale bill number is required'),
    customerSaleBillDate: yup.string().required('Customer sale bill date is required'),
    warrantyDate: yup.string().required('Warranty date is required'),
});
