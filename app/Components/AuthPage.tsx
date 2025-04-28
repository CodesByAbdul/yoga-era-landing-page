import React, { useState } from 'react';

export default function AuthPage() {
  // Brand colors from your original component
  const brandColors = {
    primary: '#5a4f41',    // Dark brown - primary action color
    secondary: '#9e896d',  // Medium brown - hover state
    background: '#d1c5b6', // Light beige - background color
    highlight: '#5a4f412f' // Transparent primary for shadows/highlights
  };

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Signup specific validations
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      if (isLogin) {
        // If in login mode, you'd typically redirect the user
        console.log('Login successful, redirect user');
      } else {
        // If in signup mode, switch to login
        setIsLogin(true);
        setFormData({
          ...formData,
          confirmPassword: ''
        });
      }
    }, 2000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d1c5b6] p-4" id="auth">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 border-t-4 border-[#5a4f41]">
        <h2 className="text-3xl font-bold text-center text-[#5a4f41] mb-8">
          {isLogin ? 'Welcome Back' : 'Create Your Account'}
        </h2>
        
        {isSubmitted ? (
          <div className="bg-[#d1c5b6] border border-[#5a4f41] text-[#5a4f41] px-4 py-3 rounded relative mb-6">
            <span className="block sm:inline font-medium">
              {isLogin ? 'Login successful!' : 'Account created successfully!'}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-[#5a4f41] text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e896d] ${
                    errors.name ? 'border-red-500' : 'border-[#d1c5b6]'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>
            )}
            
            <div>
              <label className="block text-[#5a4f41] text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e896d] ${
                  errors.email ? 'border-red-500' : 'border-[#d1c5b6]'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-[#5a4f41] text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e896d] ${
                  errors.password ? 'border-red-500' : 'border-[#d1c5b6]'
                }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
            </div>
            
            {!isLogin && (
              <div>
                <label className="block text-[#5a4f41] text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e896d] ${
                    errors.confirmPassword ? 'border-red-500' : 'border-[#d1c5b6]'
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#5a4f41] text-white text-lg font-bold rounded-full py-4 px-6 transition-all duration-300 hover:bg-[#9e896d] hover:shadow-lg hover:shadow-[#5a4f412f] flex justify-center items-center"
              >
                {isLogin ? 'Log In' : 'Sign Up'} 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={toggleMode}
            className="text-[#5a4f41] font-medium hover:text-[#9e896d] transition-colors duration-300 underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
}