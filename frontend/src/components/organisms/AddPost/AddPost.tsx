import React, { useState } from 'react'
import { ICreatePost } from '../../../utils/interfaces/posts_interfaces'
import jwtInterceptor from '../../../utils/interceptors/jwtInterceptor'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ButtonBox, Container, FormBox } from './AddPost.styles'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

const createPost = async (payload: ICreatePost): Promise<ICreatePost> => {
  const resposne = await jwtInterceptor.post('http://localhost:8000/core/posts/create', payload);
  return resposne.data
};

const AddPost = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<ICreatePost>({
    title: '',
    content: '',
  });

  const [contentError, setContentError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentChange = (content: string) => {
    setFormData({
      ...formData,
      content: content,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.content) {
      setContentError('This field is required');
      return;
    }

    setContentError(null);

    try {
      await createPost(formData).then((r) => {
        navigate(`/details/${r.id}`)
      });

      setFormData({
        title: '',
        content: '',
      });
    } catch (error) {
      console.error('An error occured. Description:', error);
    }
  };

  return (
    <Container>
      <Typography variant={'h4'} align={'center'} mt={3} mb={2}>
        Create Post
      </Typography>
      <FormBox>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id='Title'
            name='title'
            label='Title'
            variant='outlined'
            value={formData.title}
            onChange={handleInputChange}
            required
            margin='normal'
          />
          <ReactQuill
            value={formData.content}
            onChange={handleContentChange}
            theme='snow'
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
          />
          {contentError && <Typography color={'red'}>{contentError}</Typography>}
          <ButtonBox>
            <Button type='submit' variant='contained' color='primary'>
              Dodaj Post
            </Button>
          </ButtonBox>
        </form>
      </FormBox>
    </Container>
  );
};

export default AddPost;
