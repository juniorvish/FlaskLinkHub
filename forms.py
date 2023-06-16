from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, EqualTo, URL

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=4, max=20)])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class RegisterForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=4, max=20)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8)])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Register')

class CreateSubredditForm(FlaskForm):
    name = StringField('Subreddit Name', validators=[DataRequired(), Length(min=3, max=20)])
    description = TextAreaField('Description', validators=[DataRequired(), Length(max=200)])
    submit = SubmitField('Create Subreddit')

class CreatePostForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(), Length(min=3, max=100)])
    url = StringField('URL', validators=[DataRequired(), URL()])
    submit = SubmitField('Create Post')

class CreateCommentForm(FlaskForm):
    content = TextAreaField('Comment', validators=[DataRequired(), Length(max=200)])
    submit = SubmitField('Submit Comment')